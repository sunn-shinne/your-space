from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

SIZE_DESK = [
    ('s', 'small'),
    ('m', 'medium'),
    ('l', 'large'),
]

TYPE_DEVICE = [
    ('mouse', 'mouse'),
    ('keyboard', 'keyboard'),
    ('monitor', 'monitor'),
]


class Device(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(max_length=50, choices=TYPE_DEVICE)

    def __str__(self):
        return f'Девайс {self.name}'


class TimeBook(models.Model):
    date = models.DateField()
    time = models.TimeField()
    name_user = models.CharField(max_length=50, blank=True)
    surname_user = models.CharField(max_length=50, blank=True)
    phone_user = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f'Дата: {self.date}, Время {self.time}'


class Desk(models.Model):
    name = models.CharField(max_length=50)
    size = models.CharField(max_length=50, choices=SIZE_DESK)
    devices = models.ManyToManyField(Device, blank=True)
    time = models.ManyToManyField(TimeBook, blank=True)

    def __str__(self):
        return f'Стол: {self.name}, размер {self.size}'

