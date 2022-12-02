document.getElementById('bt').addEventListener('click', async()=>{
    await eel.python_connector(document.getElementById('folder').value,
    document.getElementById('lfooter').value,
    document.getElementById('mfooter').value,
    document.getElementById('rfooter').value)
})
