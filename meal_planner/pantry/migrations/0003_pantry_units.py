# Generated by Django 3.0.5 on 2020-05-06 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pantry', '0002_pantry_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='pantry',
            name='units',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
