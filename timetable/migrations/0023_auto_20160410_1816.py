# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-04-10 23:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timetable', '0022_auto_20160406_1905'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='num_credits',
            field=models.FloatField(default=-1),
        ),
        migrations.AddField(
            model_name='ottawacourse',
            name='num_credits',
            field=models.FloatField(default=-1),
        ),
        migrations.AlterField(
            model_name='hopkinscourse',
            name='num_credits',
            field=models.FloatField(default=-1),
        ),
        migrations.AlterField(
            model_name='umdcourse',
            name='num_credits',
            field=models.FloatField(default=-1),
        ),
    ]