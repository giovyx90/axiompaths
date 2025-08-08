import yaml
from pathlib import Path

def extract_paths(nav):
    paths = []
    if isinstance(nav, list):
        for item in nav:
            paths.extend(extract_paths(item))
    elif isinstance(nav, dict):
        for value in nav.values():
            paths.extend(extract_paths(value))
    elif isinstance(nav, str) and nav.endswith('.md'):
        paths.append(nav)
    return paths


def test_nav_links_exist():
    config = yaml.safe_load(Path('mkdocs.yml').read_text())
    nav = config.get('nav', [])
    markdown_paths = extract_paths(nav)
    docs_dir = Path('docs')
    missing = [p for p in markdown_paths if not (docs_dir / p).exists()]
    assert not missing, f"Missing markdown files: {missing}"
