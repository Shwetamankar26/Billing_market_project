"""
URL configuration for billing_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from sales_app.views import CustomerViewSet, InvoiceViewSet, InvoiceProductViewSet
from stocks_app.views import OffersViewSet, GSTViewSet, ProductCategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register('customer', CustomerViewSet, basename='customer')
router.register('invoice', InvoiceViewSet, basename='invoice')
router.register('invpro', InvoiceProductViewSet, basename='invpro')
router.register('product', ProductViewSet, basename='product')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('a1/', include('faker_app.urls')),
    path('faker/', include('faker_app.urls')),
    path('api/', include(router.urls)),
    path('sales/', include('sales_app.urls')),
]