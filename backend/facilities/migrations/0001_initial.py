# Generated by Django 3.0.7 on 2020-07-02 03:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Facility',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField()),
                ('address', models.TextField()),
                ('size', models.TextField()),
                ('last_modified', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]