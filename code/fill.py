from jinja2 import Template
import os
import yaml

# File Paths
content_path = os.path.join(os.path.dirname(__file__), "content.yaml")
template_path = os.path.join(os.path.dirname(__file__), "template.html")
output_path = os.path.join(
    os.path.dirname(os.path.dirname(__file__)), "docs", "index.html"
)

# Load Contents
content = {}
with open(content_path, "r", encoding="utf-8") as f:
    content = yaml.safe_load(f)

# Load Template
template = None
with open(template_path, "r", encoding="utf-8") as f:
    template = Template(f.read())

# Render
result = template.render(content)

# Output File
with open(output_path, "w") as f:
    f.write(result)
