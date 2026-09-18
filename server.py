import http.server
import socketserver
import urllib
from socket import gethostname, gethostbyname

HOST = gethostbyname(gethostname())
PORT = 8000
ADRESS = (HOST, PORT)

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(ADRESS, Handler) as httpd:
    print(f"Serving on {HOST}:{PORT}")
    httpd.serve_forever()
