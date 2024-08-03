## Black Hat Python Chapter 1 Success!

I finally discovered that this is exactly all I needed to do to get it sorted.

Great.

The following steps were simple, got Kali up and running. But even the first hurdle took ages.
Updates

The penultimate one took at least 20mins to download, it even gave a little warning before proceeding, which I stupidly didn’t read and just pressed Y. The last one removed 260 MB.

There were lots of warnings of "This may take some time...."

```shell
tim@kali:~$ sudo apt update
tim@kali:~$ apt list --upgradable
tim@kali:~$ sudo apt upgrade
tim@kali:~$ sudo apt dist-upgrade
tim@kali:~$ sudo apt autoremove
```

ChatGPT explains:

`sudo apt update`: Updates the package list to get the latest versions available in the repositories.

`apt list --upgradable`: Lists all the packages that have newer versions available for upgrade.

`sudo apt upgrade`: Upgrades all the currently installed packages to their latest versions.

`sudo apt dist-upgrade`: Upgrades the system to a new distribution version, handling dependencies intelligently and installing/removing packages as necessary.

`sudo apt autoremove`: Removes packages that were automatically installed to satisfy dependencies for other packages and are now no longer needed. This removed 260MB – nice.

### Python

I checked I had the latest version of Python. I found that Python 3.12.4 had just been released, so I got it to download that.

> 💡 **n00b tip:** I got stuck inside the Python interactive shell prompt and had no idea how to escape it. `quit()` worked for me, but `exit()` also does.

It took extra fiddling to make sure I made a virtual environment with 3.12. I found that when I only put python3, it used 3.11. I had to actually put in python3.12 to make it use the latest version.

### IDE

Once I downloaded the latest version of VS Code, I hadn’t realised that I needed to go find it to then install like, I was trying to install it while in the venv!

All done. Finally to Chapter 2.
