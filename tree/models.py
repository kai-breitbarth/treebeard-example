from django.db import models
from treebeard.mp_tree import MP_Node


class Category(MP_Node):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(blank=True)
    node_order_by = ["name"]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Categories"
