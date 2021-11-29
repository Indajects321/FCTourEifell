
w do you deploy a web, enterprise and a 
       standalone applications?

maven-standalone-application
    .jar
    maven-stanalone-application-0.0.1-SNAPSHOT.jar
    java -jar packageName.jar

    java -jar user-banking.jar 
    java -jar maven-stanalone-application-0.0.1-SNAPSHOT.jar
      java JDK 1.7+


maven-web-application
    .war
    Tomcat
    JBoss/WildFly

maven-enterprise-application
    .ear
    JBoss/WildFly
Tomcat  deploys:
  maven-web-applications ONLY
JBoss/WildFly deploys:
  maven-web-application
  maven-enterprise-application

 aa.com 
 users(30m)-->webServers-->appServer-->database
                            war & ear

                               BOA/RBC/TD
 
               Frontend                backend
               web/LB Tier      app tier     db tier
 users(30m)--->webServers/LB-->appServers-->database
              Security Gate 
              sql injections 
              man-in-the-middle-attack
               Load Balancer



  Dev-Sec-Ops 
  Dev-Ops
GitHub

Application Server: 

  IBM WebSphere Application Server (WAS)  --> IBM
  
  Apache Tomcat   --> Apache  --> OS
  
  JBoss/WildFly   --> Redhat/IBM 
    1.0.0 to 7.0.9
    1.x to 7.x --> JBoss
    from 8.x-->    WildFly
         versioning  
    git branch and git tag 

  WebLogic --> Oracle  


IQ: What is the d/f b/w JBoss/WildFly and Tomcat? 
    vendors:
      Tomcat==Apache and 
      JBoss=Redhat  for 
    JBoss==Web/ear applications 
    Tomcat==web applications ONLY 

 AWS Create 2 keys:
    private =  .pem
    public  = lock

 sudo hostname tomcat 

Tomcat Installation:
---------------------
https://tomcat.apache.org/download-90.cgi
https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.55/bin/apache-tomcat-9.0.55.tar.gz

 Java is the pre-requisit for Tomcat 

THD: Tomcat Home Directory 
     where tomcat software is extracted 
 $HOME_TOMCAT:  /opt/tomcat9    
                /app/tomcat = rbc 
                /usr/local/tomcat
 bin:
    startup.sh    LINX/MacOS
    startup.bat   ----> WINDOWS OS
    shutdown.sh
    shutdown.bat     ----> WINDOWS OS
    catalina.sh start
    catalina.sh stop | start | restart | 
         switch case 
    version.sh
    version.bat
 
 conf:
    server.xml
       autoDeploy
    tomcat-user.xml  
 lib:
    contain all the jar files
 
 logs:
  catalina.out
  host-manager.log
  What are the log files available in the log dir? IQ:
    
 webapps: where deployments are effected in Tomcat
           default deployment Directory in Tomcat 
    war files
        maven-web-app.war  # mvn package 
        maven-web-app
        cp *.war /webapps
    others
    
 work:
    working related files
 
 sublime text editor
     
 temp:   
 sudo sh /opt/tomcat/bin/catalina.sh status 

   ps -ef | grep tomcat 

  54.167.41.199:8080

  http://54.167.41.199:8080/


   ssh port = 22
   tomcat port = 8080

Tomcat server configuration:
1. enable tomcat external access
   defaultAccess= localhost
vi /opt/tomcat9/webapps/manager/META-INF/context.xml 
  #vi /webapps/host-manager/META-INF/context.xml  

  <!--

  <Valve className="org.apache.catalina.valves.RemoteAddrValve"
         allow="127\.\d+\.\d+\.\d+|::1|0:0:0:0:0:0:0:1" />
-->
 
  vi /opt/tomcat/webapps/host-manager/META-INF/context.xml 
 
2.  Add tomcat users 
  
  vi /opt/tomcat9/conf/tomcat-users.xml  # to add user before the closing tag
  <user username="LandmarkTechology" password="admin123" roles="manager-gui,admin-gui"/> 
  <user username="landmark" password="admin123" roles="manager-gui,admin-gui,manager-script"/>

3. Assign password to ec2-user or $user 
    passwd ec2-user 
       scp app.war 

4.  enable PasswordAuthentication 
sudo sed -i "/^[^#]*PasswordAuthentication[[:space:]]no/c\PasswordAuthentication yes" /etc/ssh/sshd_config
sudo service sshd restart 
  # vi /etc/ssh/sshd_config and enable PasswordAuthentication

5. Change the tomcat default port from 8080 to 7000 ($customPort) 
   vi /opt/tomcat9/conf/server.xml  # change port number for security
   restart tomcat 
     sudo stoptomcat
     sudo starttomcat 


=END of Tomcat server configuration:
  http://54.167.41.199:7000/maven-web-app/

JAVA Project for a FinTech Client (boa / rbc / barclays ):
1. 
   GitHub is use as a SCM platform 
 Git is use for versioning ,
 Maven is a build tool 
  git clone 
   boa
   mkdir boa 
   git clone https://github.com/mylandmarktechs/maven-web-app
   cd maven-web-app
   mvn clean package

2. deploy to tomcat from maven build server = 
   In tomcat deployments are done in the webapps Directory

   Build server = maven  172.31.25.95
   deployment server (s) = Tomcat  = 172.31.20.163

     Just copy your war file into the webapps Directory
     scp fileName.war ec2-user@172.31.20.163:/opt/tomcat9/webapps/opt/tomcat9/webapps


  scp fileName.war ec2-user@172.31.20.163:/opt/tomcat/webapps/

  scp *war ec2-user@172.31.20.163:/tmp/

  scp target/*war ec2-user@172.31.20.163:/tmp/

  scp target/*.war ec2-user@172.31.20.163:/tmp/

    what is the difference b/w cp and scp 

3. Open tomcat port in the firewall (Security Groups)
   8080  = 7000
   Permission denied


    http://54.167.41.199:7000/maven-web-app/  = 
    http://54.167.41.199:7000/ebay
       application context path 

  
IQ: What is default port no for Tomcat and 
    how can it be changed? 
   
  Tomcat uses port 8080 and 8443 for HTTP and HTTPS 
    traffic requests respectively. 
  
  Tomcat default port no: 8080 

  http://3.238.177.166:8080/app/services/employee/getEmployeeDetails
 
  7189

Port 8080 is used by:
   Tomcat 
   JBoss 
   Jenkins 

System Hardening  --> Highly secured 

 Linux or WINDOWS  
    ports 
    0 - 65535 
    0 - 1024 

 Firewall 

   ADDRESS BINDING 

  netstat -tlpn
   yum install net-tools
  
  vi /opt/tomcat/conf/server.xml  # change port number
  
  Tomcat default port no: 8080 --> 8888 -- > 800
  
  Port no:
    0-65535 = port range
    80  -- http
    443 -- https
    8080 -- Jenkins / Tomcat  / JBoss
    0-1024 -- Reserve ports
    1025-65535  
    465 --- SMTP
    587  --- SMTP
    22   --- ssh
    23   -- ftp
 
 scp  target/*.war  ec2-user@IP:/tmp
 
  
Who's in charge of apps deployment?
  MiddleWare Admins  :
    out of job  

How are hotfixes or hot deployments managed in tomcat? Reload

server.xml
    change port no.
    
    <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
     

    <Host name="localhost"  appBase="ebayapps"
 
    unpackWARs="true" autoDeploy="true">


How to improve tomcat server performance?
Multiple deployments will reduce tomcat server performance.
  1GB = 1000MB 
        64MB 
Increase the heap Size 
    64MB
    256MB


