# COMMAND LINE INTERFACE
<h3>Must known bash commands</h3>
<p>Bash is an acronym for "Bourne Again Shell" named after Stephen Bourne, the creator of the Unix shell "sh."</p>

<br>

## USEFUL FILE SYSTEM COMMANDS

## pwd
> *Print Working Directory*
``` shell
$ pwd
/PowerCoders/GitHub/support/CLI
```

<br>

## ls
> *List (files and folders of the current working directory)*

``` shell
$ ls
dir1/  dir2/  README.md
```
add option -a to display also hidden files and folders 
``` shell
$ ls -a
./  ../  .bob/  dir1/  dir2/  README.md
```

<br>

## cd
> *Change directory*

``` shell
$ cd /path/to/your/folder
```
*Tip: if the path is too long, you can type **cd** and drag the folder into the bash window*

**cd ..** - *go to parent dir (one step above)*
``` shell
$ cd ..
```

*or, go two or more steps above*
``` shell
$ cd ../..
$ cd ../../..
etc.
```

<br>

## touch
> *Create a file*

``` shell
$ touch index.html
```
*creates a file named "index.html" into the current dir*

``` shell
$ touch dir1/index.html
```
*creates a file named "index.html" into "dir1" (if dir exists)*

<br>

## mkdir
> *Make Directory*

``` shell
$ mkdir dir3
```
*creates a folder named "dir3" into the current dir*

<br>

## rm
> *Remove file/directory*
``` shell
$ rm index.html
```
*removes the file "index.html" (if exists)*

``` shell
$ rm dir3
```
*removes the folder "dir3" (if exists and not empty!)*

``` shell
$ rm dir3 -r
```
*removes the folder "dir3" even if not empty. **-r** stands for recursive*

<br>

## mv
> *Move file/directory*
``` shell
$ mv style.css dir1

or

$ mv style.css ./dir1
```
*moves "style.css" from current directory to dir1*

``` shell
$ mv dir1/style.css .

or

$ mv dir1/style.css ./
```
*moves "style.css" from "dir1" to current directory*

<br>

## cp
> *Copy file/directory*
``` shell
$ cp style.css dir1
```
*to copy the file "style.css" to "dir1"*

``` shell
$ cp -r dir1 dir2
```
*to copy "dir1" into "dir2" (-r option is for recursive)*

<br>

## clear
> *Clear bash window*
``` shell
$ clear
```

<br>

---

<br>

## OTHER USEFUL COMMANDS

## nano
> *Edit a file*

``` shell
$ nano file.txt
```
*will open "file.txt" inside bash editor*

#### Then, inside nano editor
`CTRL + X` - to quit the editor (will be asked to save the file)

`Y/N` - to save or not the content

`ENTER` - to validate

<br>

## cat
> *See (the content of a) a (text) file*
``` shell
$ cat file.txt
```

if you want to see also the line numbers, add the option **-n**

``` shell
$ cat file.txt -n
```

<br>

---

<br>

## USEFUL KEYBOARD SHORTCUTS

1. **`Up / Down`** arrows **`↑ ↓`** - Navigate in bash history
2. **...** - other will follow...
