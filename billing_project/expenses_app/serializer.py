from rest_framework import Serializers
from .models import Expenses

class ExpensesSerializer(serializer.ModelSerializer):
    class Meta:
        Model = Expenses
        fields = "__all__"
