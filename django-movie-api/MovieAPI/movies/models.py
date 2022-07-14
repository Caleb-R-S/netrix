from django.db import models

# Create your models here.
class Movie(models.Model):
    isLiked = models.BooleanField(default=False)
    title = models.CharField(max_length=50, default='')
    genre = models.CharField(max_length=10, default='Action')

    def __str__(self):
        return self.title
