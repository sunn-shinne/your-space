from django.contrib.auth import get_user_model
from rest_framework import generics, permissions

from base.models import Device, TimeBook, Desk
from base.serializer import UserRegisterSerializer, UserListSerializer, \
    DeviceCreateSerializer, DeviceListSerializer, TimeBookCreateSerializer, \
    TimeBookListSerializer, DeskCreateSerializer, DeskListSerializer, \
    DeskUpdateSerializer


class UserRegister(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserRegisterSerializer


class UserList(generics.ListAPIView):
    # permission_classes = [permissions.IsAdminUser]

    queryset = get_user_model().objects.all()
    serializer_class = UserListSerializer


class DeviceCreate(generics.CreateAPIView):
    # permission_classes = [permissions.IsAdminUser]

    queryset = Device.objects.all()
    serializer_class = DeviceCreateSerializer


class DeviceList(generics.ListAPIView):
    queryset = Device.objects.all()
    serializer_class = DeviceListSerializer


class TimeBookCreate(generics.CreateAPIView):
    # permission_classes = [permissions.IsAdminUser]

    queryset = TimeBook.objects.all()
    serializer_class = TimeBookCreateSerializer


class TimeBookList(generics.ListAPIView):
    queryset = TimeBook.objects.all()
    serializer_class = TimeBookListSerializer


class DeskCreate(generics.CreateAPIView):
    # permission_classes = [permissions.IsAdminUser]

    queryset = Desk.objects.all()
    serializer_class = DeskCreateSerializer


class DeskList(generics.ListAPIView):
    queryset = Desk.objects.all()
    serializer_class = DeskListSerializer


class DeskView(generics.RetrieveAPIView):
    queryset = Desk.objects.all()
    serializer_class = DeskListSerializer


class DeskUpdate(generics.UpdateAPIView):
    queryset = Desk.objects.all()
    serializer_class = DeskUpdateSerializer