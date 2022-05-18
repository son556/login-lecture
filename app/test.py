import sys
import cv2
import os

print(sys.argv)
file_path = ''
for path in sys.argv:
    file_path = path


path_gray = 'D:/nodejs/server_test/app/image/'

for i in os.listdir(file_path):
    if len(i) > 0:
        print(sys.argv)
        path = file_path + i
        path_gra = path_gray + i
        img_color = cv2.imread(path, cv2.IMREAD_COLOR)
        img_cv_gray = cv2.cvtColor(img_color, cv2.COLOR_BGR2GRAY)
        cv2.imwrite(path_gra, img_cv_gray)
    else:
        continue




