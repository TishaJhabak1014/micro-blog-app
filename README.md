# React Apps
- Repo. for building apps with react
- containing checkpoints for incremental development

#### Some git notes
- to update a branch name: git branch -m old_name new_name

### If went wrong when dependencies were installed the first time.
- `npm install -g npm@latest` to update npm because it is sometimes buggy.
- `npx rimraf ./**/node_modules` to remove the existing modules (if using npm v5^)
- `npm install` to re-install the project dependencies.

### To get json-server up and running:
- `npx json-server --watch data/db.json --port 8000`

