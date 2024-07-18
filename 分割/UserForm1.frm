VERSION 5.00
Begin {C62A69F0-16DC-11CE-9E98-00AA00574A4F} UserForm1 
   Caption         =   "UserForm1"
   ClientHeight    =   2863
   ClientLeft      =   91
   ClientTop       =   406
   ClientWidth     =   4298
   OleObjectBlob   =   "UserForm1.frx":0000
   StartUpPosition =   1  'オーナー フォームの中央
End
Attribute VB_Name = "UserForm1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False

Private Sub CommandButton1_Click()
    Dim v As Variant
    Dim s As String
    Dim i As Long
    i = UserForm1.TextBox2.Value
    s = UserForm1.TextBox1.Value
    v = SplitStr(s, i)
    For i = 0 To UBound(v) Step 1
        Cells(1 + i, 1).Value = v(i)
    Next
End Sub

Private Sub CommandButton2_Click()
    Unload UserForm1
End Sub

Function SplitStr(ByVal Datas As String, ByVal Length As Long) As Variant
    Dim v As Variant
    Dim n As Long
    Dim i As Long
    
    n = 0
    ReDim v(0 To Round(Len(Datas) / Length - 0.5, 0))
    For i = 1 To Len(Datas) Step Length
        v(n) = Mid(Datas, i, Length)
        n = n + 1
    Next
    SplitStr = v
End Function

