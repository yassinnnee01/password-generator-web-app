import zlib
import struct
import math
import os

def create_png(width, height, color_func):
    # PNG signature
    png = bytearray(b'\x89PNG\r\n\x1a\n')
    
    # IHDR chunk
    ihdr_data = struct.pack('!IIBBBBB', width, height, 8, 6, 0, 0, 0) # 8-bit RGBA
    png.extend(struct.pack('!I', len(ihdr_data)) + b'IHDR' + ihdr_data + struct.pack('!I', zlib.crc32(b'IHDR' + ihdr_data) & 0xffffffff))
    
    # IDAT chunk
    raw_data = bytearray()
    for y in range(height):
        raw_data.append(0) # Filter type 0 (None)
        for x in range(width):
            r, g, b, a = color_func(x, y, width, height)
            raw_data.extend([r, g, b, a])
            
    compressed = zlib.compress(raw_data, 9)
    png.extend(struct.pack('!I', len(compressed)) + b'IDAT' + compressed + struct.pack('!I', zlib.crc32(b'IDAT' + compressed) & 0xffffffff))
    
    # IEND chunk
    png.extend(struct.pack('!I', 0) + b'IEND' + struct.pack('!I', zlib.crc32(b'IEND') & 0xffffffff))
    return png

def shield_color(x, y, width, height):
    # Normalized coordinates (-1 to 1)
    nx = (x - width / 2) / (width / 2)
    ny = (y - height / 2) / (height / 2)
    dist = math.sqrt(nx*nx + ny*ny)
    
    # Rounded container background
    corner_r = 0.8
    if abs(nx) > corner_r and abs(ny) > corner_r:
        cdist = math.sqrt((abs(nx)-corner_r)**2 + (abs(ny)-corner_r)**2)
        if cdist > (1 - corner_r):
            return (0, 0, 0, 0) # Transparent outside rounded corner
            
    # Shield shape math
    # Top flat with tapered point at bottom
    sx = nx / 0.75
    sy = ny / 0.75
    
    is_shield = False
    if -0.8 <= sy <= 0.2 and abs(sx) <= (0.8 - (sy + 0.8)*0.1):
        is_shield = True
    elif 0.2 < sy <= 0.8:
        # Taper to point at sy=0.8, sx=0
        max_x = 0.74 * (1.0 - ((sy - 0.2) / 0.6)**1.5)
        if abs(sx) <= max_x:
            is_shield = True
            
    if is_shield:
        # Cyber blue / indigo gradient
        r = int(99 + (sy + 0.8) * 20)
        g = int(102 + (sx + 0.8) * 40)
        b = int(241 - (sy + 0.8) * 30)
        return (max(0, min(255, r)), max(0, min(255, g)), max(0, min(255, b)), 255)
    else:
        # Dark navy background (#0f172a)
        return (15, 23, 42, 255)

os.makedirs('icons', exist_ok=True)
os.makedirs('assets', exist_ok=True)

with open('icons/icon-192.png', 'wb') as f:
    f.write(create_png(192, 192, shield_color))

with open('icons/icon-512.png', 'wb') as f:
    f.write(create_png(512, 512, shield_color))

with open('icons/apple-touch-icon.png', 'wb') as f:
    f.write(create_png(180, 180, shield_color))

print("Successfully generated icon-192.png, icon-512.png, apple-touch-icon.png!")
