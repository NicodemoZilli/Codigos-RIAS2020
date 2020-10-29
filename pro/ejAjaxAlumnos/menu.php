
        <div id="menu">
			<nav>
				<h3>Secciones</h3>
				<ul>
				<div id="nuevo"></div>
        <?php
          if (isset($_SESSION["usu"])){
         ?>
         <li><a href="index.php" id="ligainicio">Inico</a></li>
         <li><a href="logout.php" id="ligaSalir">Salir</a></li>
        <?php
          }
        ?>
        <div id="Salida"></div>
				</ul>
			</nav>
        </div>
