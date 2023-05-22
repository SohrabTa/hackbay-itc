# The ITC goes Hackbay

# Setup Python Environment
You have two options to set up the python environment:
1. [conda](#Conda) (recommended)
2. [venv](#Venv)

## Conda
### Setup conda environment
```
conda create --name <name_of_your_env>
```
### Start conda environment
```
conda activate <name_of_your_env>
```
### Install pip in your conda environment
```
conda install pip
```

## Venv
### Setup venv
```
python -m venv c:\path\to\myenv
```
### Activate venv
```
c:\path\to\myenv\Scripts\activate
```
# Install dependencies
## Install Python modules
```
pip install -r requirements.txt
```
## Install ReactJS packages
```
cd src
npm install -f
```

# Setup the backend
## Migrations
```
python src/leadmanager/manage.py migrate
python src/leadmanager/manage.py makemigrations
```

# Run the App

## Run the backend
```
python src/leadmanager/manage.py runserver
```

## Run the frontend
```
cd src/leadmanager/frontend
npm run dev
```
## Access App
Open browser at http://127.0.0.1:8000/