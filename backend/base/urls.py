from django.urls import path

from base.views import UserRegister, UserList, DeviceCreate, DeviceList, \
    TimeBookList, TimeBookCreate, DeskCreate, DeskList, DeskUpdate, DeskView

urlpatterns = [
    path('users/register/', UserRegister.as_view(), name='users_register'),
    path('users/', UserList.as_view(), name='users_list'),

    path('device/create/', DeviceCreate.as_view(), name='device_create'),
    path('device/', DeviceList.as_view(), name='device_list'),

    path('time_book/create/', TimeBookCreate.as_view(),
         name='time_book_create'),
    path('time_book/', TimeBookList.as_view(), name='time_book_list'),

    path('desk/create/', DeskCreate.as_view(),
         name='desk_create'),
    path('desk/', DeskList.as_view(), name='desk_list'),
    path('desk/<int:pk>/view/', DeskView.as_view(), name='desk_view'),
    path('desk/<int:pk>/update/', DeskUpdate.as_view(), name='desk_update'),
]
