# Generated by Django 4.0 on 2021-12-12 10:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Device',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('type', models.CharField(choices=[('mouse', 'mouse'), ('keyboard', 'keyboard'), ('monitor', 'monitor')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='TimeBook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Desk',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('size', models.CharField(choices=[('s', 'small'), ('m', 'medium'), ('l', 'large')], max_length=50)),
                ('devices', models.ManyToManyField(to='base.Device')),
                ('time', models.ManyToManyField(to='base.TimeBook')),
            ],
        ),
    ]
