
from django.contrib import admin
from django.urls import path,include
# from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView


# router .register('forgotpass',ForgetPasswordView,basename='forgotpass')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('auth_app.urls')),
    # path('app1/',include('app1.urls')),
    # path('api/access/',TokenObtainPairView.as_view(),name='access'),
    # path('api/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
    # path('verify/',TokenVerifyView.as_view(),name='verify'),
  
]
