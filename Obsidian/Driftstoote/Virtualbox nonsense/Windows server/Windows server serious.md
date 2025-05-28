This is a guide on how to make a template for windows server 2025

step 1 download the [[Windows_server.iso]]

step 2 make a new virtual machine. give it the name **TEMPLATE SERVER**
![[New virtual machine.png]]
step 3 select the right iso and select **Windows server 2025 Standard (Desktop experience)**

step 4 go to "unattended install" and enter the password "a", enter the [[windows server product key]] and change the name of the user to **administrator** (this makes the account default to administrator)

step 5 assign 8gb (8192 MB) of RAM and 2 cores

step 6 the unnatended install will stop on this screen![[Server Setup Partitions.png]]
to get past this screen click **Delete Partition** and then click **Next**

step 7 go to the page called **Local server** and [[how to change an ip address in windows server 2025|change the ip address]]

![[Pasted image 20250522114558.png]]