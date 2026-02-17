

<!DOCTYPE html>
<html>
<head>
    <title>Mi App de Música</title>
    <style>
        body { font-family: Arial; margin: 40px; }
        .card { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }
    </style>
</head>
<body>

<h2>Agregar Canción</h2>

<form method="POST">
    <input type="text" name="titulo" placeholder="Título" required><br><br>
    <input type="text" name="artista" placeholder="Artista" required><br><br>
    <textarea name="letra" placeholder="Letra de la canción"></textarea><br><br>
    <button type="submit">Guardar</button>
</form>

<hr>

<h2>Lista de Canciones</h2>

<?php
$result = $db->query("SELECT * FROM canciones ORDER BY id DESC");

while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    echo "<div class='card'>";
    echo "<strong>" . htmlspecialchars($row['titulo']) . "</strong><br>";
    echo "Artista: " . htmlspecialchars($row['artista']) . "<br><br>";
    echo "<pre>" . htmlspecialchars($row['letra']) . "</pre>";
    echo "</div>";
}
?>

<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>
<?php
// Conectar o crear base de datos
$db = new SQLite3('db.sqlite');

// Crear tabla si no existe
$db->exec("CREATE TABLE IF NOT EXISTS canciones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    artista TEXT,
    letra TEXT
)");

// Insertar canción
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $titulo = $_POST["titulo"];
    $artista = $_POST["artista"];
    $letra = $_POST["letra"];

    $stmt = $db->prepare("INSERT INTO canciones (titulo, artista, letra) VALUES (?, ?, ?)");
    $stmt->bindValue(1, $titulo, SQLITE3_TEXT);
    $stmt->bindValue(2, $artista, SQLITE3_TEXT);
    $stmt->bindValue(3, $letra, SQLITE3_TEXT);
    $stmt->execute();
}
?>