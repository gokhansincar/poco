# GitHub - Storing your credentials
When you "push" content to GitHub you have to enter your credentials (username + password)<br>
It can be fun to do this once but really not if you have to to this at each session!<br>
Bellow, two options to store your GitHub credentials on your computer.

<br>

## 1. OPTION ONE - Use the "config" credential helper
To save your credentials into the configuration file, open Git Bash and enter the following :

``` sh
$ git config --global credential.helper wincred
```
Done !

<br>

## 2. OPTION TWO - Connecting to GitHub with SSH
For a more robust and flexible solution (you can use your SSH keys on each of your working computers) follow the steps bellow. **You have to do this just once!**

<br>

1. **Checking for existing SSH keys** - [GitHub Help](https://help.github.com/en/articles/checking-for-existing-ssh-keys)

    ``` sh
    # Lists the files in your .ssh directory, if they exist
    $ ls -al ~/.ssh
    ```

<br>

2. **Generating a new SSH key and adding it to the ssh-agent** - [GitHub Help Page](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

    ##### I. Open Git Bash and paste the text below, substituting in your GitHub email address.

    ``` sh
    $ ssh-keygen -t rsa -b 4096 -C "your_github_email@example.com"
    ```

    ##### II. When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.

    ``` sh
    > Enter a file in which to save the key ( /c/Users/you/.ssh/id_rsa ):[Press enter]
    ```

    ##### III. At the prompt, just **press ENTER**, no need for passphrase....

    ``` sh
    > Enter passphrase (empty for no passphrase): [Type a passphrase]
    > Enter same passphrase again: [Type passphrase again]
    ```
  
<br>  

  3. **Adding your SSH key to the ssh-agent** - [GitHub Help Page](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)

      ##### I. Ensure the ssh-agent is running, type:

      ``` sh
      # start the ssh-agent in the background
      $ eval $(ssh-agent -s)
      ```

      *you'll see something like* `> Agent pid 59566`

      ##### II. Add your SSH private key to the ssh-agent

      ``` sh
      $ ssh-add ~/.ssh/id_rsa
      ```
  
  <br>

  4. **Add the SSH key to your GitHub account**

  > Please follow the steps in GitHub Help Page:<br>
  > https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account