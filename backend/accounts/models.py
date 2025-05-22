from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, phone, full_name, password=None):
        if not email:
            raise ValueError("Users must have an email")
        user = self.model(email=self.normalize_email(email), phone=phone, full_name=full_name)
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    full_name = models.CharField(max_length=100)
    password = models.CharField(max_length=128)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone', 'full_name']

    def __str__(self):
        return self.email
