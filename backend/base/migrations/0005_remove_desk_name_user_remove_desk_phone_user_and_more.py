# Generated by Django 4.0 on 2021-12-19 12:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_remove_desk_user_desk_name_user_desk_phone_user_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='desk',
            name='name_user',
        ),
        migrations.RemoveField(
            model_name='desk',
            name='phone_user',
        ),
        migrations.RemoveField(
            model_name='desk',
            name='surname_user',
        ),
    ]
