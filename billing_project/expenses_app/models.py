from django.db import models


class Expenses(models.Model):
    expenseID = models.PositiveIntegerField()
    #vendorexp = models.ForeignKey(ExpenseCategory, on_delete=models.DO_NOTHING)
    typeOfExp = models.TextField(max_length = 20)
    description = models.TextField(max_length=100,unique=True)
    amount = models.FloatField(verbose_name='amount')
    #created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        """Returns a string representation of this expense."""
        return self.expenseID