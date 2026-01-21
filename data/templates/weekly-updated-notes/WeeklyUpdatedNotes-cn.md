.action{ $startdate := toDate "2006-01-02" (substr 0 10 .title) }
.action{ if max ($startdate | unixEpoch) 0 }.action{ else }.action{ $startdate = toDate "20060102" (substr 0 10 .title) }.action{ end }
.action{ if max ($startdate | unixEpoch) 0 }.action{ else }.action{ $startdate = now }.action{ end }

.action{$today := $startdate | date "20060102"}
.action{$next := ($startdate | date_modify (printf "+%dh" (mul 7 24)))| date "20060102"}

# 本周更新的笔记文档（.action{ $today } ~ .action{ $next }）


.action{$blocks := queryBlocks "SELECT * FROM blocks WHERE id in (SELECT root_id FROM blocks WHERE (updated >= '?' AND updated <= '?' AND root_id != '?')) order by updated DESC LIMIT 100" $today $next .id}


.action{range $v := $blocks}
- ((.action{$v.RootID} ".action{$v.HPath}"))
.action{end}

