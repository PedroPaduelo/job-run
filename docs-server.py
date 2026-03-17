import http.server
import os

PORT = 4174
DOCS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'docs')

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DOCS_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        path = self.path.split('?')[0]
        full = os.path.join(DOCS_DIR, path.lstrip('/'))

        if os.path.isdir(full):
            idx = os.path.join(full, 'index.html')
            if os.path.isfile(idx):
                self.path = path.rstrip('/') + '/index.html'
        elif not os.path.isfile(full) and not path.endswith('.html'):
            attempt = full + '.html'
            if os.path.isfile(attempt):
                self.path = path + '.html'

        super().do_GET()

    def log_message(self, format, *args):
        print(f"[docs] {self.address_string()} - {format % args}")

if __name__ == '__main__':
    with http.server.HTTPServer(('0.0.0.0', PORT), NoCacheHandler) as httpd:
        print(f"Serving docs on port {PORT}")
        httpd.serve_forever()
