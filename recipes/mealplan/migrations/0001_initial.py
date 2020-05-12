# Generated by Django 3.0.5 on 2020-05-07 07:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Mealplan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('recipe_id1', models.IntegerField()),
                ('recipe_id2', models.IntegerField()),
                ('recipe_id3', models.IntegerField()),
                ('details', models.CharField(blank=True, max_length=500)),
                ('date', models.DateTimeField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='mealplans', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]