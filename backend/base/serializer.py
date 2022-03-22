from rest_framework import serializers
from django.contrib.auth import get_user_model

from base.models import Device, TimeBook, Desk


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('first_name', 'last_name', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = get_user_model()(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('first_name', 'last_name', 'username')


class DeviceCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = '__all__'


class DeviceListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = '__all__'


class TimeBookCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeBook
        fields = '__all__'


class TimeBookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeBook
        fields = '__all__'


class DeskCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desk
        fields = '__all__'


class DeskListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desk
        fields = '__all__'
        depth = 1


class DeskUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Desk
        fields = '__all__'
