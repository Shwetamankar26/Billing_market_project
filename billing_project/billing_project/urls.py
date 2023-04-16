
from rest_framework.routers import DefaultRouter
from auth_app.views import UserViewset
from django.contrib import admin
from rest_framework_simplejwt import views as jwt_views
from django.urls import path, include

router = DefaultRouter()
router.register('user',UserViewset,basename='user')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls)),
   path('token/', 
          jwt_views.TokenObtainPairView.as_view(), 
          name ='token_obtain_pair'),
     path('token/refresh/', 
          jwt_views.TokenRefreshView.as_view(), 
          name ='token_refresh'),
    # path('auth/',include('auth_app.urls')),
  
    
]
