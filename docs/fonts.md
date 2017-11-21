# Fonts

## How it works?
We use [typography.com](https://www.typography.com/) as a fonts provider. The assets they serve depend on the environment.

- **Development**: on this environment it works as a normal provider. Client request fonts from a CDN and the CDN returns assets.
- **Production**: on here client request assets from a CDN and then CDN responds with a redirect ([302](https://http.cat/302)) to our own fonts folder which has folder name and filenames as a hash.

![Fonts request flow](https://docs.google.com/drawings/d/e/2PACX-1vQ485rcVaXuqdC3IxOjEjOUvzos5rr4dRjGTb_n5i4_iLE3AAUKQgKBvdH6iicQpDBiPjDnB0sNRi4a/pub?w=960&h=720)

## How to change fonts assets?

- Please ask [Sari](mailto:sari.griffiths@red-badger.com) for credentials for [typography.com](https://www.typography.com/)
- Login and go to the project **Website Honestly Live v2**
- Make your changes
- Go to production tab
- Download assets and unzip
- Paste the unzipped folder inside [/assets/fonts](./assets/fonts), it's very important that you keep the folder name number that typography.com provides you.
- Deploy website-honestly to production
- On [typography.com](https://www.typography.com/) click on **Republish this project to your server
 ** button so typography.com can validate your fonts on production.
