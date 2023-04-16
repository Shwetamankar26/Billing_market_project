from rest_framework import viewsets
from .serializers import UserSerializer,User
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from .utils import Send_Mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken


# class HomeView(APIView):
     
#    permission_classes = (IsAuthenticated, )
#    def get(self, request):
#        content = {'message': 'Welcome to the JWT  Authentication page using React Js and Django!'}
#        return Response(content)

class UserViewset(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        resp =  super().create(request, *args, **kwargs)
     
        user_email = resp.data.get('email')
        subject = 'Add Employee.'
        username = resp.data.get('username')
        password = resp.data.get('password')
        context = {'user_email':user_email,'username':username}
        body =f"You've added successfully in our staff members.Your username is: {username} and password is: {password} " 
        Send_Mail.send_mail(subject=subject,body=body,to=[user_email])
        return resp




