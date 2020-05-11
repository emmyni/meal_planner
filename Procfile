web: gunicorn django_project.wsgi:application --log-file - --log-level debug
python meal_planner/manage.py collectstatic --noinput
meal_planner/manage.py migrate