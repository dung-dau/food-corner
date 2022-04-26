### Food Corner
A mailing app that allows users to compose and send emails created with HTML, CSS, React and Firebase

## Installation Instructions
Run the following commands: <br/><br/>
`git clone https://github.com/dung-dau/food-corner` <br/><br/>
`cd food-corner` <br/><br/>
`npm install` <br/><br/>
`npm run start` <br/><br/>
Unless a port is specified or if port 3000 is already being used by another applcation, <br />
the website will be available at http://localhost:3000/

## Known Issues
Clicking "Starred" immediately after starring/unstarring 1 or more emails will cause the page to be unresponsive for about 
30-60 seconds due to the fact that the code for updating data in the Firebase Firestore database is being run followed by 
a rerendering of the email list.

## License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
