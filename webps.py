import csv
import os

directory = "public/images/thumb" # Directory containing files to combine

for filename in os.listdir(directory):
	if ".jpg" in filename.lower() or ".png" in filename.lower() or ".jpeg" in filename.lower():
		inputfile = directory+"/"+filename
		newfile = "public/images/webp/"+filename.replace(".png",".webp").replace(".jpg",".webp").replace(".jpeg",".webp").replace(".PNG",".webp")
		os.system('cwebp -q 100 '+inputfile+' -o '+newfile)
