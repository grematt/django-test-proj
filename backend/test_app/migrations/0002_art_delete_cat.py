# Generated by Django 4.2.6 on 2023-10-10 04:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('test_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Art',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('content', models.TextField(max_length=1000)),
            ],
        ),
        migrations.DeleteModel(
            name='Cat',
        ),
    ]
