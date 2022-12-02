from docx import Document
from docx.shared import Pt
import PySimpleGUI as sg
import re
import os
import eel
eel.init('web')



data_folder_path =r""
data_left_footer =""
data_middle_footer=""
data_right_footer=""



@eel.expose
def python_connector(folder,left,middle,right):
    data_folder_path = folder
    data_left_footer = left
    data_middle_footer = middle
    data_right_footer = right
    res = path_adder(data_folder_path)
    print(res)
    print(data_folder_path + data_left_footer + data_middle_footer + data_right_footer)
    batch_processor(res,data_left_footer, data_middle_footer,data_right_footer,data_folder_path)



# version 1.0


def Text_Replacer_Footer(document,string,string2,string3):
    doc = document             
    style_f = doc.styles['Footer']
    font_f = style_f.font
    font_f.name = 'Arial'
    font_f.bold = False
    font_f.size = Pt(10)
    footer = doc.sections[0].footer
    paragraph_f = footer.paragraphs[0]
    
    # every "\t" from left footer to right footer
    s=""
    s2=""
    s3=""
    s=string
    s2=string2
    s3=string3
    word=s+"\t"+s2+"\t"+s3
    paragraph_f.text = word
    paragraph_f.style = doc.styles['Footer']# this is what changes the style




# folder path

def path_adder(dir_path):
    # list to store files
    res = []

    # Iterate directory
    for path in os.listdir(dir_path):
        # check if current path is a file
        if os.path.isfile(os.path.join(dir_path, path)):
            res.append(path)
    return res

    #paragraph_f.text = "FRO-018 (NOV 08, 2022)\t© Kings’s Printer for Ontario, 2022" # insert new value here.


#applying the footer in all the files

def batch_processor(array,string,string2,string3,path):
    for i in array:
        if i != "text_script.py":
            filename = path+"//"+i
            doc = Document(filename)
            Text_Replacer_Footer(doc,string,string2,string3)
            doc.save(filename)



eel.start('index.html', mode='my_portable_chromium', 
                        host='localhost', 
                        port=8000, 
                        block=True ) 



