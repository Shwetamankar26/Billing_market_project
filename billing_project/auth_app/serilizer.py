from rest_framework import serializers 
from .models import User,forgetPassword
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import  smart_str,force_str,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode


class UserSerilizer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=('username','password','email')   
    def validate(self, attrs):
        email=attrs.get('email','')
        username=attrs.get('username','')
        if not username.isalnum():
            raise serializers.ValidationError('the username sholud obly alphanumeric charater only!!')
        return super().validate(attrs)

    def update(self, instance, validated_data):

        instance.set_password1(validated_data['password'])
        instance.save()

        return instance
        
class ForgetPasswordSerilizer(serializers.ModelSerializer):
    class Meta:
        model=forgetPassword
        fields='__all__'
        
class RestPasswordSerilizer(serializers.Serializer):
    email=serializers.EmailField()
    class Meta:
        fields=['email']
   
class SetNewPasswordSerializer(serializers.Serializer):
    password=serializers.CharField(min_length=6, max_length=40,write_only=True)
    token=serializers.CharField(min_length=1,write_only=True)
    uidb64=serializers.CharField(min_length=1,write_only=True)
    
    class Meta:
        fields=['password','token','uidb64']
    def validate(self, attrs):
        try:
            password=attrs.get('password')
            token=attrs.get('token')
            uidb64=attrs.get('uidb64')
            
            id =force_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=id)
            
            if not PasswordResetTokenGenerator().check_token(user,token):
                raise AuthenticationFailed('The reset link is invalid ',401)
            user.set_password(password)
            user.save()
        except Exception as e:
            pass
        return super().validate(attrs)
    
    
    
    
       
       
