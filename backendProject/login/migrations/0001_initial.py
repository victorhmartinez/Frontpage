# Generated by Django 2.1.7 on 2019-07-11 01:06

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import login.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0009_alter_user_last_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=15, unique=True)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('is_admin', models.BooleanField(default=True)),
                ('is_superuser', models.BooleanField(default=True)),
                ('is_active', models.BooleanField(default=True)),
                ('update_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('create_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
            },
            managers=[
                ('objects', login.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('idCategory', models.AutoField(primary_key=True, serialize=False)),
                ('nameCategory', models.CharField(max_length=255)),
                ('active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Content',
            fields=[
                ('content_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=45)),
                ('description', models.CharField(max_length=500)),
                ('update_time', models.DateTimeField(default=django.utils.timezone.now)),
                ('create_time', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
        migrations.CreateModel(
            name='Content_info',
            fields=[
                ('content_info_id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('place', models.CharField(max_length=45)),
                ('link_form', models.CharField(max_length=200)),
                ('url', models.CharField(max_length=200)),
                ('content_content_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.Content')),
            ],
        ),
        migrations.CreateModel(
            name='Content_media',
            fields=[
                ('content_media_id', models.AutoField(primary_key=True, serialize=False)),
                ('path', models.CharField(max_length=500)),
                ('content_content_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.Content')),
            ],
        ),
        migrations.CreateModel(
            name='Info_site',
            fields=[
                ('info_site_id', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=45)),
            ],
        ),
        migrations.CreateModel(
            name='ItemCategory',
            fields=[
                ('idItemCategory', models.AutoField(primary_key=True, serialize=False)),
                ('nameItemCategory', models.CharField(max_length=255)),
                ('active', models.BooleanField(default=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.Category')),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('menu_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=45)),
                ('orden', models.IntegerField()),
                ('item_category_item_category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.ItemCategory')),
            ],
        ),
        migrations.CreateModel(
            name='Persons',
            fields=[
                ('person_id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=255)),
                ('second_name', models.CharField(max_length=255)),
                ('first_last_name', models.CharField(max_length=255)),
                ('second_last_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Persons_Contacts',
            fields=[
                ('contact_info_id', models.AutoField(primary_key=True, serialize=False)),
                ('contact', models.CharField(max_length=255)),
                ('item_category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.ItemCategory')),
                ('persons_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.Persons')),
            ],
        ),
        migrations.CreateModel(
            name='Persons_departaments',
            fields=[
                ('persons_departaments_id', models.AutoField(primary_key=True, serialize=False)),
                ('item_category_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='item_category_id', to='login.ItemCategory')),
                ('persons_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.Persons')),
                ('universitycareer', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='universitycareer', to='login.ItemCategory')),
            ],
        ),
        migrations.CreateModel(
            name='Persons_media',
            fields=[
                ('persons_media_id', models.AutoField(primary_key=True, serialize=False)),
                ('path', models.CharField(max_length=255)),
                ('item_category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.ItemCategory')),
                ('persons_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.Persons')),
            ],
        ),
        migrations.CreateModel(
            name='Persons_role',
            fields=[
                ('persons_role_id', models.AutoField(primary_key=True, serialize=False)),
                ('item_category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.ItemCategory')),
                ('persons_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.Persons')),
            ],
        ),
        migrations.CreateModel(
            name='Pre_requirements',
            fields=[
                ('pre_requirements_id', models.AutoField(primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Subject_matter',
            fields=[
                ('subject_matter_id', models.AutoField(primary_key=True, serialize=False)),
                ('name_subject_matter', models.CharField(max_length=255)),
                ('universitycareer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.ItemCategory')),
            ],
        ),
        migrations.AddField(
            model_name='pre_requirements',
            name='subject_matter_id_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subject_matter_id_id', to='login.Subject_matter'),
        ),
        migrations.AddField(
            model_name='pre_requirements',
            name='subject_matter_requeriment_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subject_matter_requeriment_id', to='login.Subject_matter'),
        ),
        migrations.AddField(
            model_name='info_site',
            name='info_site_universitycareer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='info_site_universitycareer', to='login.ItemCategory'),
        ),
        migrations.AddField(
            model_name='info_site',
            name='type_info',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.ItemCategory'),
        ),
        migrations.AddField(
            model_name='content_media',
            name='item_category_item_category_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='login.ItemCategory'),
        ),
        migrations.AddField(
            model_name='content',
            name='academic_period',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='academic_period', to='login.ItemCategory'),
        ),
        migrations.AddField(
            model_name='content',
            name='content_universitycareer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='content_universitycareer', to='login.ItemCategory'),
        ),
        migrations.AddField(
            model_name='content',
            name='type_event',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='type_event', to='login.ItemCategory'),
        ),
        migrations.AddField(
            model_name='users',
            name='person_id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='login.Persons'),
        ),
        migrations.AddField(
            model_name='users',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]