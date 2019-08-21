## This is prototype mobile helpdesk chat

### Realized functional
- Authorization from firebase server(when app opened)
- Correspondence with the administrator
- Image insertion from gallery(but not sending)

### In development
- Sending images and documents
- Reorganization of the mechanism for receiving messages

### For android
`````
- yarn install
- set your 'serverUrl' to config.js
- move to 'android/app/' your google-services.json
- react-native run-android
`````
### For ios
`````
- yarn install
- set your 'serverUrl' to config.js
- move to 'ios/mobile/' your GoogleServices-info.plist
- react-native run-ios --simulator="iPhone {model}"
`````
