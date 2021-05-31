from django.contrib.auth import logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
from rest_framework.authtoken.models import Token
from rest_framework import status

from rest_framework.authtoken.views import ObtainAuthToken


from .serializers import UserSerializer, AuthTokenSerializer


class CreateTokenView(ObtainAuthToken):
    serializer_class = AuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user': UserSerializer(user).data})


class LogoutView(APIView):
    authentication_classes = [TokenAuthentication, BasicAuthentication]

    def get(self, request, format=None):
        logout(request)
        return Response(status=status.HTTP_200_OK)
