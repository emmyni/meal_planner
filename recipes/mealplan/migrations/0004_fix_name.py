# Generated by Django 3.0.5 on 2020-05-08 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mealplan', '0003_auto_20200507_2202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mealplan',
            name='name',
            field=models.CharField(max_length=100),
        ),
    ]