# Generated by Django 4.0 on 2021-12-20 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_remove_desk_name_user_remove_desk_phone_user_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='timebook',
            name='name_user',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='timebook',
            name='phone_user',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AddField(
            model_name='timebook',
            name='surname_user',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]