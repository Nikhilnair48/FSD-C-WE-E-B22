# MySQL Installation & Setup Guide (Windows)

## 1. Download MySQL Installer

* Visit the official [MySQL Community Downloads](https://dev.mysql.com/downloads/installer/).
* Choose **Windows (x86, 32-bit), MSI Installer**.

---

## 2. Run the Installer

1. Double-click the downloaded `.msi` file.
2. Choose a setup type:

   * **Developer Default** (recommended): Installs MySQL Server, Workbench, and useful tools.
   * **Server Only**: Just the MySQL database server.
   * **Custom**: Pick exactly what you want.
3. Click **Execute** to download and install selected components.

---

## 3. Configure MySQL Server

1. **Server Configuration Type**

   * Choose **Standalone MySQL Server** (default).
2. **Connectivity**

   * Port: **3306** (default).
   * Ensure Windows Firewall allows access.
3. **Authentication Method**

   * Recommended: **Use Strong Password Encryption (caching\_sha2\_password)**.
4. **Root Account Setup**

   * Set a **root password** (make note of it).
   * Optionally create additional MySQL users.
5. **Windows Service**

   * Select **Configure MySQL Server as a Windows Service**.
   * Service name: usually `MySQL80` or `MySQL84`.
   * Choose **Start the MySQL Server at System Startup** if you want auto-start.

---

## 4. Finish Installation

* Apply configuration.
* If successful, the installer will start the MySQL service and confirm connection.

---

## 5. Verify Installation

### Using Command Prompt

Open **Command Prompt** and run:

```cmd
mysql -u root -p
```

* Enter the password you set during installation.
* You should enter the MySQL shell (`mysql>` prompt).

### Using MySQL Workbench (GUI)

* Launch **MySQL Workbench** (installed by default with Developer setup).
* Click **+** to create a new connection:

  * Hostname: `localhost`
  * Port: `3306`
  * Username: `root`
* Enter the password and connect.

---

## 6. Managing MySQL as a Windows Service

### Start the Service

```cmd
net start MySQL80
```

### Stop the Service

```cmd
net stop MySQL80
```

### Restart the Service

```cmd
net stop MySQL80
net start MySQL80
```

*(Replace `MySQL80` with the actual service name if different — check in `services.msc`.)*

---

## 7. Useful Companion Tool: MySQL Workbench

* Already included with the Developer Default setup.
* Features:

  * Run SQL queries in a GUI.
  * Design and model databases visually.
  * Manage users, roles, and permissions.

---

## 8. First Query Example

Inside MySQL shell:

```sql
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
SELECT * FROM users;
```

**You now have MySQL running on Windows**, with both command-line and GUI access.
