# File Metadata Microservice - User Documentation
### Overview:
- [Description](#description)
- [Response](#response)
- [Details](#details)
- [Visit Site](https://obn-file-metadata-generator.onrender.com/)

## Description
The File Metadata Microservice is a simple web app that lets you submit a form with a file upload. Use the form file input field with the name attribute set to "upfile." When you submit a file, the microservice returns a JSON response with important data about the uploaded file, such as the file name, file type, and file size in bytes. This service makes it easy to manage and analyze your uploaded files by simplifying the process of retrieving file metadata.

## Response
Example:
at route /api/fileanalyse
```json
  {"name":"dockerstuffs.txt","type":"text/plain","size":693}
```

## Details
- You can submit a form that includes a file upload.
- The form file input field has the name attribute set to upfile.
- When you submit a file, you receive the file name, type, and size in bytes within the JSON response.
