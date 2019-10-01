# GITHUB MISC
Some misc tips I found useful to know

<br>

## Ignore file and folders when pushing to remote
Git have a special file named *.gitignore* that we can use to keep files and folders only on your local machine. They will be "ignored" when you use the **push** command.<br>

1. **Create a file named *.gitignore* at the root of your local repo**<br>

2. **Add one ignored file or folder by line**<br>
   For example, I want to ignore the *.gitignore* file itself and a folder named *.vscode*. So I'll open the file *.gitignore* and type :

   ```bash
   .gitignore
   .vscode/
   ```
   Save the file and you're good to go. When pushing to remote those two will be ignored.

<br>

---

<br>

## Remove stuff from remote repo but keep them on local machine
If you are like me and you create the *.gitignore* file **after** you already pushed some files/folders on the remote that you don't want to see there, you can remove the like this :

```bash
# The commands bellow "stage" the deletion of the directory/file, 
# but doesn't touch anything on disk.

# Remove a directory from remote (replace "somedir" with your dir name)
$ git rm --cached -r somedir 

# Remove a file from remote (replace "somefile.ext" with your file)
$ git rm --cached somefile.ext
```

After this, when you'll add/commit/push your changes, the directories/files will be deleted from remote (if they exist).<br>
Source [here](https://stackoverflow.com/a/3469805).
   
<br>

---

<br>

## Change the active SSH key on the fly
If you are like me and you have several Github accounts and two (or more) SSH keys, sometimes the active SSH key doesn't correspond with the repository you are currently in. You can specify *the good* key like this :

```bash
# Call the SSH agent
$ ssh-agent bash

# Add the SSH key to your agent (my key here is "id_rsa_powercoders")
$ ssh-add ~/.ssh/id_rsa_powercoders
```


