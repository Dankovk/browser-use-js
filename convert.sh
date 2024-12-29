#!/bin/bash; process_file() { local src="$1"; local dst="$2"; mkdir -p "$(dirname "$dst")"; echo "// Python source reference:" > "$dst"; echo "//" >> "$dst"; while IFS= read -r line; do echo "// $line" >> "$dst"; done < "$src"; echo "" >> "$dst"; echo "// TypeScript implementation:" >> "$dst"; }; cd original-source-NOT_IGNORED/browser_use; find . -name "*.py" | while read -r file; do if [[ "$file" != *"__init__.py"* ]] && [[ "$file" != *"test"* ]] && [[ "$file" != *"tests.py"* ]]; then ts_file="../../src/${file%.*}.ts"; ts_file="${ts_file#./}"; echo "Converting $file to $ts_file"; process_file "$file" "$ts_file"; fi; done
